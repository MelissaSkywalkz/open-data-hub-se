# 🔬 Labs: Bug Reports & Feature Requests

**Welcome to the innovation hub!** 🧪

This is the central hub for reporting bugs and requesting features for experimental tools in Open Data Orbit Labs. Labs is where we prototype, test, and refine tools for the open data community.

## 🛠️ What's in Labs?

Labs hosts experimental tools and utilities, including:

- **Metadata validators** – DCAT-AP-SE compliance checkers
- **Data converters** – CSV/JSON/GeoJSON transformations
- **API wrappers** – Python/JavaScript clients for data portals
- **Utility scripts** – Automation tools for common tasks
- **Prototypes** – Early-stage experimental features

_All Labs tools are in active development. Expect bugs, breaking changes, and rapid iteration._

## 🐛 Reporting Bugs

Found something broken? Help us fix it!

### Before Reporting
1. **Search existing issues** – Someone might have reported it already
2. **Check documentation** – Might be expected behavior
3. **Test on latest version** – Bug might already be fixed

### Use the Bug Report Template
Click "New Discussion" → Select **"Bug Report (Labs)"** template

**Include**:
- Tool/script name and version
- What you expected vs. what happened
- Steps to reproduce
- Error messages (full stack trace)
- Environment (OS, Python/Node version, etc.)

### Example
```
**Tool**: DCAT-AP-SE Validator v0.2.1
**Expected**: Valid JSON should pass validation
**Actual**: Throws "KeyError: 'dcat:dataset'"
**Steps**: Run validator on attached file
**Environment**: Python 3.11, Ubuntu 22.04
```

## ✨ Requesting Features

Have an idea for a new tool or improvement?

### Before Requesting
1. **Check the roadmap** – Might already be planned
2. **Search discussions** – Someone might have suggested it
3. **Think about scope** – Labs = experimental, not enterprise-ready

### Use the Feature Request Template
Click "New Discussion" → Select **"Feature Request"** template

**Include**:
- Problem you're trying to solve
- Proposed solution
- Who would benefit
- Alternatives you've considered

### Example
```
**Problem**: Manually creating DCAT-AP-SE metadata is tedious
**Solution**: CLI tool that generates metadata from CSV schema
**Benefits**: Developers, data publishers
**Alternatives**: Excel templates (not automatable)
```

## 🔧 Contributing Fixes

Want to fix a bug or implement a feature yourself?

1. **Comment on the discussion** – Let us know you're working on it
2. **Fork the repo** – Make your changes
3. **Submit a PR** – Reference the discussion
4. **Follow contributing guidelines** – See [CONTRIBUTING.md](../../../CONTRIBUTING.md)

## 🏷️ Priority Labels

We use votes (👍 reactions) and labels to prioritize:

- **🔥 Critical** – Breaks core functionality
- **⚠️ Major** – Significant impact, workaround exists
- **📝 Minor** – Small issue, low impact
- **✨ Enhancement** – New feature or improvement
- **🔮 Future** – Good idea, not immediate priority

## 📊 Labs Project Board

Track progress on active bugs and features:

**Backlog** → **Triaged** → **In Progress** → **Testing** → **Released**

## 🧪 Testing & Feedback

All Labs tools need testing! Even if you don't code:

- **Try breaking things** – Edge cases, weird inputs
- **Report confusing UX** – If it's not intuitive, it needs work
- **Share use cases** – Real-world scenarios help us design better

## 🎯 What Gets Prioritized?

1. **Critical bugs** – Fixes blocking usage
2. **High-value features** – Many votes + clear benefit
3. **Quick wins** – Low effort, high impact
4. **Strategic alignment** – Fits Labs mission

## 📢 Status Updates

Check **Announcements** for:
- New tools released to Labs
- Major bug fixes deployed
- Breaking changes in experimental features

## ❓ Questions?

- **"When will this be fixed?"** – Check the project board or ask below
- **"Can I help test?"** – Always! Comment and we'll guide you
- **"Why was my request declined?"** – We'll explain reasoning transparently

---

**Remember**: Labs is experimental. Tools here are learning to fly. Your feedback helps us refine them into production-ready spacecraft. 🚀

**Found a bug or have an idea? Don't wait – share it below!** 💡
