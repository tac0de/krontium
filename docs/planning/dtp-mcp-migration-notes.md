# DTP MCP Migration Notes

Status: planning note, not implemented.

## Current Finding

No dedicated `dtp-mcp` tool is currently exposed in this Codex session.

Available relevant tool surfaces:

- file-based DTP runtime under `~/.codex/dtp/`
- DTP skills under `~/.agents/skills/`
- general Codex project/thread tools
- multi-agent tools
- Node REPL MCP
- browser/Playwright tools

Historical Agent OS MCP outputs exist under:

- `/Users/wonyoung_choi/Documents/Codex/2026-06-15/codex-agent-os-mcp/outputs/`

Those notes describe a thin global MCP with tools such as:

- `agent_os_policy`
- `agent_os_detect_project`
- `agent_os_preflight`
- `agent_os_contract_freshness`
- `agent_os_context_hygiene`
- `agent_os_reset`
- `agent_os_handoff`

The current session does not expose those tools.

## DTP-Compatible MCP Shape

If Agent OS MCP is migrated to DTP, the MCP should stay thin.

Good DTP MCP responsibilities:

- detect project route from `~/.codex/dtp/projects.md`
- report source-of-truth files to inspect
- run preflight classification
- summarize task mode
- check whether local project instructions exist
- run link/test/validator commands when configured by the project
- produce trace skeletons when meaningful

Bad DTP MCP responsibilities:

- storing project product facts globally
- deciding canon
- replacing repo-local docs
- hiding source files from the main agent
- making autonomous product decisions
- treating retrieved memory as truth

## Proposed Migration

1. Keep the old Agent OS MCP disabled unless explicitly needed.
2. Create a new thin `dtp-mcp` or rename the logical layer only after reviewing `~/.codex/config.toml`.
3. Map old concepts:
   - `agent_os_detect_project` -> `dtp_detect_project`
   - `agent_os_preflight` -> `dtp_preflight`
   - `agent_os_contract_freshness` -> `dtp_source_truth_status`
   - `agent_os_context_hygiene` -> `dtp_context_hygiene`
   - `agent_os_handoff` -> `dtp_trace`
4. Do not migrate project-specific Agent OS facts into global DTP.
5. Add Krontium to `~/.codex/dtp/projects.md` only if the user wants it registered as a managed local project.

## Recommendation

Do not block Krontium planning on MCP migration.

Use current file-based DTP now. Later, migrate Agent OS MCP into a thin DTP MCP if repeated project routing/preflight work becomes friction.
