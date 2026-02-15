---
title: Stratum
description: The federated cloud framework separating Identity from Compute.
template: splash
hero:
  tagline: The Cloud, Decoupled. Manage apps in your Domain Space, run them on any Hosting Provider.
  actions:
    - text: Introduction
      link: /000-introduction
      variant: primary
    - text: Roadmap
      link: /roadmap
---

# The Core Concept

Stratum is a new framework designed to separate the Identity of an application (managed by Domain Spaces) from its Compute (supplied by Hosting Providers).

### 1. Domain Spaces (Identity)

The control plane. Instead of managing servers, you manage Domain Apps directly from your registrar (e.g., Cloudflare, Namecheap).

- App Registry: Select apps to install directly on your domain.
- Unified Config: Manage settings here, regardless of where the app actually runs.
- Routing: Automatically points traffic to your current Hosting Provider.

### 2. Hosting Providers (Compute)

The power plant. Providers like AWS, Azure, or local servers become interchangeable execution environments.

- Dumb Execution: They simply run the Stratum Containers you send them.
- Budgeting: You set a price cap; they allocate hardware to match.
- Commoditized: Switch providers instantly by flipping a switch in your Domain Space.

### 3. Stratum Containers

A new container standard for true portability.

- OS Agnostic: Runs on a "Stratum Shim" so it works on any provider hardware.
- Migration Ready: State and Logic are separated to allow instant live migration.

### Roadmap

- Phase 1: Research — Defining the JSON spec and API contract.
- Phase 2: The Shim — Building the open-source connector for hosts.
- Phase 3: Integration — Reference implementation for Domain Spaces.
