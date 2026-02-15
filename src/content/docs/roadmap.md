---
title: Development Roadmap
description: The path from concept to a global federated cloud.
---

This roadmap outlines the engineering and organizational milestones required to launch Stratum v1.0. The strategy prioritizes defining Specifications before building Implementations to ensure the ecosystem remains open and interoperable.

# Phase 1: The Protocol Specifications (Months 1-3)

Goal: Define the "Language" of Stratum. How do Domains talk to Hosts?

- [ ] The Capsule Spec (stratum.toml)
    - Define the strict JSON/TOML schema for application manifests.
    - Standardize resource requests (e.g., cpu: "micro", memory: "512mb").
    - Outcome: A validated JSON Schema file.

- [ ] The Discovery Protocol (DNS-SD)
    - Finalize the DNS TXT record format for linking Domains to Hosts.
    - Define the verification challenge (how a Host proves ownership to a Registrar).
    - Outcome: An RFC-style document defining the handshake.

- [ ] Capability Interfaces (WIT)
    - Define the standard WASI interfaces for "Stratum-Core".
    - stratum:keyvalue: Standardized KV store access.
    - stratum:sql: Standardized SQL query interface.
    - Outcome: .wit files ready for use in Rust/Go/JS SDKs.

# Phase 2: The "Shim" Runtime (Months 4-6)

Goal: Build the engine that runs on the Hosting Provider's hardware.

- [ ] stratum-host (Rust)
    - Build the reference runtime using Wasmtime.
    - Implement the "Loader": It reads a stratum.toml, pulls the Wasm binary from a registry, and starts it.
    - Implement Resource Limits: Ensure a capsule cannot exceed its budget.

- [ ] The Capability Providers
    - Build default providers for the Shim.
    - Network Provider: Maps HTTP requests to the Wasm function.
    - Storage Provider: Maps stratum:keyvalue calls to a local Redis or SQLite file (for testing).

- [ ] Local Dev Environment
    - Create a CLI tool (stratum dev) that acts as both Domain and Host on a user's laptop.

# Phase 3: The Control Plane (Months 7-9)

Goal: Build the "App Store" interface for Domain Registrars.

- [ ] Reference Registrar UI
    - A Next.js/Astro web app that simulates a Domain Registrar dashboard.
    - Features: "Install App", "Connect Host", "View Logs".
    - Note: This will be open-sourced so Namecheap/Cloudflare can fork it.

- [ ] The "Migrate" Switch
    - Implement the "Stop-and-Copy" logic.
    1. Registrar sends "Drain" signal to Host A.
    2. Registrar updates DNS to Host B.
    3. Registrar sends "Start" signal to Host B.

# Phase 4: State & Persistence (Months 10-12)

Goal: Make data portable, not just code.

- [ ] Stratum Storage Buckets
    - Define the spec for externalizing state. Apps should not save to disk; they should save to a "Bucket" URI provided at runtime.
    - Outcome: Apps can move between hosts while keeping their data in an S3-compatible backend.

- [ ] Live State Replication (Research)
    - Investigate NATS JetStream for real-time state syncing between Host A and Host B during migration.

# Phase 5: Legal & Economy (Months 13+)

Goal: Establish the business model.

- [ ] License Drafting
    - Finalize the Stratum Commercial Source License (SCSL).
    - Hire IP counsel to review the "Revenue Share" and "Audit" clauses.

- [ ] Provider Portal
    - Build the web dashboard where Hosting Providers submit their monthly "Usage Reports" and pay their 10% royalty.

- [ ] Public Beta
    - Invite 3 small hosting providers and 1 registrar partner to run the system in production.
