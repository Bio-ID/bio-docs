---
sidebar_position: 1
---

# User

User Method

### Table Of User Method

- [Parameters](#parameters)
- [Example Usage](#example-usage)
- [Returned Data](#returned-data)

### Parameters
- ID (Bio ID)
- options (Options Object)
- options.id_type (ID Type Option - this option sets search by a specific ID type, can be one of (user, discord), default is "user")
```js
user(ID, options)
```

### Example Usage
```js
await bio.user("000000000000");
// Different ID Type
await bio.user("300530315351425024", {
	"id_type": "discord"
});
```

### Returned Data
Returns User Object
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