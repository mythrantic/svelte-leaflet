FROM node:25-alpine AS base
# This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# Make sure you update both files!

# Enable pnpm
RUN corepack enable

FROM base AS installer
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json ./

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Build the project
RUN DEPLOY_TARGET=node pnpm build

# Create a new stage for the runner
FROM base AS runner
WORKDIR /app

# Don't run production as root - add a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 svelte

COPY --from=installer --chown=svelte:nodejs /app/package.json .
COPY --from=installer --chown=svelte:nodejs /app/pnpm-lock.yaml .
COPY --from=installer --chown=svelte:nodejs /app/node_modules ./node_modules
COPY --from=installer --chown=svelte:nodejs /app/build ./build

USER svelte
EXPOSE 3000

# Modify this line to start your SvelteKit application, e.g., run your server.js or the appropriate script.
CMD [ "node", "build" ]