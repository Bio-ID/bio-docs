---
sidebar_position: 2
---

# User By Discord

User By Discord Route

### Table Of User By Discord Route

- [Route](#route)
- [Method](#method)
- [Parameters](#parameters)
- [Returned Data](#returned-data)

### Route
```js
https://bioid.id/api/discord/:ID
```

### Method
:::tip Request Method
GET
:::

### Parameters
- :ID (Discord ID)

### Returned Data
Returns User Object
- id (Bio ID)
- name (Account Name)
- badges (Account Badges)
- email_verified_at (Email Verification Date)
- type (Account Type)
- created_at (Account Creation Date)
- updated_at (Account Last Update Date)
- profile (Profile Object)
```js
{
	"id": "000000000000",
	"name": "TARIQ",
	"badges": "Owner Verified",
	"email_verified_at": "2020-12-12 12:44:02",
	"type": "Business",
	"created_at": "2020-10-10 04:51:42",
	"updated_at": "2022-01-16 04:37:25",
	"profile": {
		"bio": "Founder (CEO) & Developer Of Bio\r\n\r\n[Visit My Website](https://itariq.dev)",
		"work": "Full-Stack Developer",
		"location": "Turkey",
		"nationality": "Syrian",
		"gender": "Male",
		"birthday": "2005-12-28",
		"socialstatus": null,
		"hobby": "Coding",
		"phone": null,
		"website": "itariq.dev",
		"image": "profile/5cqajaq9BzBZMU20NoTDNsW7N3uhibTqglXhCGH0.png",
		"banner": "profile/DmlCfHwzRxWMDxekugz5WAvgf8eDD2PyfZaTSijU.png",
		"cv": null,
		"facebook": null,
		"instagram": "xitariqx",
		"twitter": "xitariqx",
		"youtube": "https://youtube.com/TARIQDev",
		"linkedin": null,
		"snapchat": null,
		"twitch": "TARIQDev",
		"discord": "300530315351425024",
		"telegram": null,
		"tiktok": null,
		"pinterest": null,
		"github": "1TGDev",
		"updated_at": "2022-03-02 14:49:37"
	}
}
```