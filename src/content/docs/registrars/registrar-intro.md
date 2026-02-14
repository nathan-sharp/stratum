---
title: For Domain Providers
description: The role of Domain Spaces (Registrars) in the Stratum Framework.
---

# The Control Plane

In the Stratum framework, Domain Providers (Registrars like Cloudflare, Namecheap, GoDaddy) evolve from simple DNS managers into the Operating System of the Web.

You are the user's primary interface. You hold the state, the configuration, and the "Blueprints" for their digital presence.

## Your Responsibilities

1. The App Store UI:
You provide the dashboard where users browse and "install" Stratum Apps. You don't run the code; you simply save the user's intent (e.g., "User wants Ghost Blog at blog.example.com").

2. Configuration Management:
You store the settings for these apps (environment variables, domain routes). These settings are portable and belong to the domain, not the server.

3. The Switchboard:
When a user connects a Hosting Provider, you send the "App Manifest" (the list of containers and configs) to that Host via the Stratum API.

    - Migration: If a user wants to switch hosts, your system updates the DNS records and sends the Manifest to the new provider.

## Why Implement Stratum?

- Stickiness: Users manage their entire stack through your interface, making your dashboard the center of their workflow.

- Revenue: Opportunity to resell premium Stratum Apps or charge for advanced management features.
