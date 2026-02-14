---
title: For App Developers
description: Building portable applications for the Stratum Framework.
---

# Write Once, Run Everywhere

As an App Developer, Stratum offers you a dream scenario: build your application once, and have it run on any cloud provider (AWS, Azure, Google) without changing a single line of code or configuration file.

### The Stratum Container

Stratum Apps are similar to Docker containers but with stricter constraints to ensure total portability.

## Key Constraints

1. No OS Dependencies:
Your app cannot rely on specific kernel versions or OS-level tools. It must run entirely within the Stratum Shim environment.

2. Strictly Stateless:
You cannot save files to the local container file system and expect them to persist.
    - Data: Must be written to a connected Database or Stratum Storage Bucket.
    - Config: Must be read from Environment Variables passed by the Domain Provider.

3. The "Manifest" File:
Instead of a Dockerfile, you define a stratum.json manifest. This defines your app's inputs (required ports, storage needs, config variables) so the Domain Provider can generate the UI for the user.

## Advantages

- Instant Distribution: Publish to the Stratum Registry, and your app becomes instantly available on every compatible Domain Provider (Namecheap, Cloudflare, etc.).

- Zero Ops Support: You don't need to help users configure Nginx, firewalls, or Linux permissions. The Framework handles the plumbing.
