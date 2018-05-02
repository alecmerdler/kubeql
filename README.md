# KubeQL

Query Kubernetes cluster using GraphQL

## Motivation

Kubernetes API objects are modeled as a flat hierarcy, with relationships defined using `labels` and `labelSelectors`. However, there is also a concept of `ownerReferences`, which are used in garbage collection for objects like `Deployments`. There is currently no way to query Kubernetes for a conclusive graph using `ownerReferences`, which would be useful for API clients to visualize and track resources being managed by Kubernetes Operators. The current solution is have a list of known types, retrieve them all, and construct the graph client-side.

## Goals

- Define a GraphQL schema for Kubernetes
- Implement GraphQL resolvers for `ownerReferences` of Kubernetes resources
- Run as a pod in a Kubernetes cluster for faster querying of the apiserver
- [stretch] Implement as a stateless Operator
- [stretch] Package for consumption by the Operator Lifecycle Manager (OLM)

## Non-Goals

- Provide a complete GraphQL interface for all Kubernetes objects

## Development

### Tech Stack

- Node.js
- TypeScript
- GraphQL (JS)
