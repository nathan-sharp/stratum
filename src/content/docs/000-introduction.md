---
title: Introduction
description: A high-level overview of the Stratum Cloud Framework.
---

# What is Stratum?

Stratum is an open-source cloud framework designed to decouple application identity from infrastructure execution. It standardizes how applications are defined, configured, and hosted, allowing users to manage their digital presence through their domain registrar while renting raw compute power from any compatible provider.

In simple terms: Manage your apps where you buy your domains. Run them anywhere.

## The Problem

Today's cloud ecosystem is fragmented and prone to vendor lock-in.

- Complexity: Setting up a scalable web app requires knowledge of Linux, networking, firewalls, and provider-specific APIs (e.g., configuring AWS Security Groups vs. Azure Network Interfaces).
- Lock-in: Migrating from one provider to another often requires rewriting deployment scripts, re-configuring networks, and manually moving data.
- Fragmentation: A user might have a domain on Namecheap, a server on DigitalOcean, and storage on AWS S3, with no unified dashboard to connect them effectively.

## The Stratum Solution

Stratum introduces a tripartite model to solve this:

1. Domain Spaces (The Control Plane):
Services like Cloudflare or Namecheap act as the "Operating System." This is where users install apps, configure environment variables, and manage routing. The state and identity of the application live here.
2. Hosting Providers (The Engine):
Services like AWS, Azure, or local ISPs provide raw compute. They run the Stratum Shim, a lightweight connector that accepts work orders from Domain Spaces. They are interchangeable commodities.
3. Stratum Containers (The Workload):
A strict container specification (similar to Docker but more constrained) that ensures an application runs exactly the same way on a Raspberry Pi as it does on an enterprise server cluster.

## Key Features

- Zero-Config Deployment: Users select apps from a registry. The framework handles port mapping, DNS records, and resource allocation automatically.
- Instant Migration: Because the "state" (config + data pointers) is held by the Domain Space, moving from Provider A to Provider B is as simple as updating an API key and flipping a switch.
- Federated & Open: No central authority controls the network. Stratum is a protocol, not a product.

## Comparison

| Feature     | Traditional Cloud (AWS/Azure) | Heroku/PaaS | Stratum   |
| ----------- | ----------------------------- | ----------- | --------- |
| Ease of Use | Low (High technical skill)    | High        | Very High |
| Portability | Low (Vendor APIs)             | Medium (Buildpacks) | High (Protocol based) |
| Cost        | Variable                      | High Premium | Market Rate (Commodity) | 
| Control     | High                          | Low         | High      |
