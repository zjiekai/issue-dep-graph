//hack: https://github.com/zjiekai/github-dependency-crawl/

var data = {
  "graph": {
    "noffle\/github-dependency-crawl\/14": [

    ],
    "noffle\/github-dependency-crawl\/13": [

    ],
    "noffle\/github-dependency-crawl\/12": [

    ],
    "noffle\/github-dependency-crawl\/11": [

    ],
    "noffle\/github-dependency-crawl\/10": [

    ],
    "noffle\/github-dependency-crawl\/9": [

    ],
    "noffle\/github-dependency-crawl\/8": [

    ],
    "noffle\/github-dependency-crawl\/7": [
      "noffle\/github-dependency-crawl\/4",
      "noffle\/github-dependency-crawl\/5",
      "noffle\/github-dependency-crawl\/6"
    ],
    "noffle\/github-dependency-crawl\/6": [

    ],
    "noffle\/github-dependency-crawl\/5": [

    ],
    "noffle\/github-dependency-crawl\/4": [

    ],
    "noffle\/github-dependency-crawl\/3": [
      "noffle\/ipget\/18"
    ],
    "noffle\/github-dependency-crawl\/2": [
      "noffle\/github-dependency-crawl\/3"
    ],
    "noffle\/github-dependency-crawl\/1": [
      "noffle\/github-dependency-crawl\/2",
      "noffle\/github-dependency-crawl\/3"
    ],
    "noffle\/ipget\/18": [
      "ipfs\/ipget\/24",
      "ipfs\/ipget\/26",
      "ipfs\/ipget\/20",
      "ipfs\/ipget\/21"
    ],
    "ipfs\/ipget\/24": [

    ],
    "ipfs\/ipget\/26": [

    ],
    "ipfs\/ipget\/20": [

    ],
    "ipfs\/ipget\/21": [

    ]
  },
  "issues": {
    "noffle\/github-dependency-crawl\/14": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/14",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/14\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/14\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/14\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/14",
      "id": 171782648,
      "number": 14,
      "title": "Split out issue fetching into its own module",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-17T23:14:28Z",
      "updated_at": "2016-08-17T23:14:28Z",
      "closed_at": null,
      "body": "For full notes, see  #13.\r\n\r\nThis means a `fetch-github-issues` module to do the heavy lifting.\r\n\r\nPrior art analysis:\r\n\r\n1. [github-issues](https:\/\/www.npmjs.com\/package\/github-issues): readable stream + pagination, but no org-level fetching\r\n2. [issues-for-url](https:\/\/www.npmjs.com\/package\/issues-for-url): no pagination; no org fetching\r\n3. [ghissues](https:\/\/www.npmjs.com\/package\/ghissues): doesn't look like org fetching is here either\r\n4. [github-issues-stream](https:\/\/www.npmjs.com\/package\/github-issues-stream): readable stream; no org fetching"
    },
    "noffle\/github-dependency-crawl\/13": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/13",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/13\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/13\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/13\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/13",
      "id": 171623486,
      "number": 13,
      "title": "other issue data here or elsewhere?",
      "user": {
        "login": "jbenet",
        "id": 138401,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/138401?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/jbenet",
        "html_url": "https:\/\/github.com\/jbenet",
        "followers_url": "https:\/\/api.github.com\/users\/jbenet\/followers",
        "following_url": "https:\/\/api.github.com\/users\/jbenet\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/jbenet\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/jbenet\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/jbenet\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/jbenet\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/jbenet\/repos",
        "events_url": "https:\/\/api.github.com\/users\/jbenet\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/jbenet\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 2,
      "created_at": "2016-08-17T10:21:50Z",
      "updated_at": "2016-08-18T02:19:23Z",
      "closed_at": null,
      "body": "Do you want to use this module to grab other issue data? (status, labels, assignee, etc) Or should this be a separate module?\r\n\r\nI would imagine this one to save on requests, but then again, we could use a proxy in between that caches requests or something. so yeah, prob separate, but figured i'd ask."
    },
    "noffle\/github-dependency-crawl\/12": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/12",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/12\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/12\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/12\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/12",
      "id": 171614199,
      "number": 12,
      "title": "Input Github URLs",
      "user": {
        "login": "jbenet",
        "id": 138401,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/138401?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/jbenet",
        "html_url": "https:\/\/github.com\/jbenet",
        "followers_url": "https:\/\/api.github.com\/users\/jbenet\/followers",
        "following_url": "https:\/\/api.github.com\/users\/jbenet\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/jbenet\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/jbenet\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/jbenet\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/jbenet\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/jbenet\/repos",
        "events_url": "https:\/\/api.github.com\/users\/jbenet\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/jbenet\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 4,
      "created_at": "2016-08-17T09:33:06Z",
      "updated_at": "2016-08-18T04:56:57Z",
      "closed_at": "2016-08-17T23:00:48Z",
      "body": "As a user of this module, it would be really nice to be able to input direct github URLs, like:\r\n\r\n```js\r\n\/\/ repo\r\ncrawl(\"https:\/\/github.com\/noffle\/github-dependency-crawl\", cb)\r\n\r\n\/\/ single issue\r\ncrawl(\"https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/3\", cb)\r\n\r\n\/\/ whole user\/org (expensive!)\r\ncrawl(\"https:\/\/gitehub.com\/noffle\", cb)\r\n```\r\n\r\nYou can use this regexp to grab out the relevant details, [i tested it some](https:\/\/gist.github.com\/jbenet\/fe154f426b03b431d35ee9acc6d7a85b):\r\n\r\n```js\r\nvar re = \/^(https?:)?(\\\/\\\/)?github\\.com\\\/([^\/]+)(\\\/([^\/]+)(\\\/(issues|pulls?)(\\\/([0-9]+))?)?)?\\\/?$\/\r\n\r\nvar getParts = function(s) {\r\n  var g = re.exec(s)\r\n  var obj = {}\r\n\r\n  if (g) {\r\n    if (g[3]) obj.user = g[3]\r\n    if (g[5]) obj.repo = g[5]\r\n    if (g[9]) obj.issue = g[9]\r\n  }\r\n  return obj\r\n}\r\n```"
    },
    "noffle\/github-dependency-crawl\/11": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/11",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/11\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/11\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/11\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/pull\/11",
      "id": 171605566,
      "number": 11,
      "title": "fix undefined opts bug",
      "user": {
        "login": "jbenet",
        "id": 138401,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/138401?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/jbenet",
        "html_url": "https:\/\/github.com\/jbenet",
        "followers_url": "https:\/\/api.github.com\/users\/jbenet\/followers",
        "following_url": "https:\/\/api.github.com\/users\/jbenet\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/jbenet\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/jbenet\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/jbenet\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/jbenet\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/jbenet\/repos",
        "events_url": "https:\/\/api.github.com\/users\/jbenet\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/jbenet\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 3,
      "created_at": "2016-08-17T08:48:42Z",
      "updated_at": "2016-08-18T02:22:25Z",
      "closed_at": "2016-08-17T22:10:16Z",
      "pull_request": {
        "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/pulls\/11",
        "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/pull\/11",
        "diff_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/pull\/11.diff",
        "patch_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/pull\/11.patch"
      },
      "body": "It looks like the `issueToGitHubIssue` function wanted to be inside of the main module function, to grab hold of the opts var in the closure. not sure, i haven't looked deeply, or tested this extensively, only minimally. (and it worked)"
    },
    "noffle\/github-dependency-crawl\/10": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/10",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/10\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/10\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/10\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/10",
      "id": 171604685,
      "number": 10,
      "title": "opts bug?",
      "user": {
        "login": "jbenet",
        "id": 138401,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/138401?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/jbenet",
        "html_url": "https:\/\/github.com\/jbenet",
        "followers_url": "https:\/\/api.github.com\/users\/jbenet\/followers",
        "following_url": "https:\/\/api.github.com\/users\/jbenet\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/jbenet\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/jbenet\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/jbenet\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/jbenet\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/jbenet\/repos",
        "events_url": "https:\/\/api.github.com\/users\/jbenet\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/jbenet\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-17T08:43:56Z",
      "updated_at": "2016-08-17T22:19:30Z",
      "closed_at": "2016-08-17T22:19:30Z",
      "body": "i'm getting this:\r\n\r\n```\r\n\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/index.js:181\r\n  if (opts.auth && opts.auth.client_id && opts.auth.client_secret) {\r\n      ^\r\n\r\nReferenceError: opts is not defined\r\n    at Object.issueToGitHubIssue (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/index.js:181:7)\r\n    at issueToDependencyGraph (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/index.js:80:10)\r\n    at reduce (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/index.js:56:9)\r\n    at \/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:2476:13\r\n    at replenish (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:884:21)\r\n    at \/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:888:13\r\n    at eachOfLimit (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:915:26)\r\n    at \/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:920:20\r\n    at reduce (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/node_modules\/async\/dist\/async.js:2475:9)\r\n    at recursiveResolveGraph (\/Users\/jbenet\/git\/issue-dep-graph\/node_modules\/github-dependency-crawl\/index.js:53:5)\r\n```\r\n\r\nlooks like `opts` is not defined here: https:\/\/github.com\/noffle\/github-dependency-crawl\/blob\/a574b6ffae898d1e72883e8ab7d197d01135cc1f\/index.js#L181"
    },
    "noffle\/github-dependency-crawl\/9": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/9",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/9\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/9\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/9\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/9",
      "id": 171098046,
      "number": 9,
      "title": "Dependency metadata",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-08-15T02:31:51Z",
      "updated_at": "2016-08-18T05:00:58Z",
      "closed_at": "2016-08-18T05:00:58Z",
      "body": "Eventually it will be nice to let the pluggable functions associate metadata with dependencies, which will require more structured data. E.g.\r\n\r\n```js\r\n{\r\n  'noffle\/github-dependency-crawl\/12': {\r\n    state: 'closed',\r\n    dependencies: [ ... ]\r\n  }\r\n}\r\n```\r\n\r\nThis may also mean more pluggable functions to e.g. decide whether to recursive more deeply (if, say, the issue is resolved)."
    },
    "noffle\/github-dependency-crawl\/8": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/8",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/8\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/8\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/8\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/8",
      "id": 171097826,
      "number": 8,
      "title": "Pluggable regex for identifying dependencies",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-15T02:29:13Z",
      "updated_at": "2016-08-15T02:29:13Z",
      "closed_at": null,
      "body": "Right now the module hard-codes the regex `\/^Depends on http\/` and then does URL matching on the line. This could be much more powerful if users could plug in their own function for dependency detection, e.g.\r\n\r\n```js\r\nvar opts = {\r\n  repo: 'noffle\/github-dependency-crawl',\r\n  dependencyDetector: function (line) {\r\n    \/\/ look for dependencies and return a github URL\r\n  }\r\n}\r\n\r\ncrawl(opts, ...)\r\n```"
    },
    "noffle\/github-dependency-crawl\/7": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/7",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/7\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/7\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/7\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/7",
      "id": 171097599,
      "number": 7,
      "title": "1.4.0 Roadmap",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-08-15T02:25:39Z",
      "updated_at": "2016-08-18T05:00:07Z",
      "closed_at": "2016-08-18T05:00:07Z",
      "body": "Depends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/4\r\nDepends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/5\r\nDepends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/6\r\n"
    },
    "noffle\/github-dependency-crawl\/6": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/6",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/6\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/6\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/6\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/6",
      "id": 171097538,
      "number": 6,
      "title": "Allow organizations to be queried",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-08-15T02:24:44Z",
      "updated_at": "2016-08-18T04:59:47Z",
      "closed_at": "2016-08-18T04:59:47Z",
      "body": "I imagine the API for this would just be an invocation of the form\r\n\r\n```js\r\ncrawl('ipfs', function (err, graph) { ...})\r\n```\r\n\r\nwhich will query `[ 'ipfs\/go-ipfs', 'ipfs\/js-ipfs', ... ]`"
    },
    "noffle\/github-dependency-crawl\/5": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/5",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/5\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/5\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/5\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/5",
      "id": 171097493,
      "number": 5,
      "title": "Allow users to provide an oauth token or client_id\/secret pair",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-08-15T02:24:02Z",
      "updated_at": "2016-08-16T18:44:39Z",
      "closed_at": "2016-08-16T18:44:39Z",
      "body": "These could be optional keys inside of `opts`, and would let users access much higher request rates against the GitHub API"
    },
    "noffle\/github-dependency-crawl\/4": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/4",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/4\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/4\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/4\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/4",
      "id": 171097422,
      "number": 4,
      "title": "Repo issue pagination",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-08-15T02:23:04Z",
      "updated_at": "2016-08-16T18:10:34Z",
      "closed_at": "2016-08-16T18:10:34Z",
      "body": "Currently the module just grabs the first page and bails."
    },
    "noffle\/github-dependency-crawl\/3": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/3",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/3\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/3\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/3\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/3",
      "id": 171090751,
      "number": 3,
      "title": "test issue 3",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-15T00:36:44Z",
      "updated_at": "2016-08-15T01:43:59Z",
      "closed_at": null,
      "body": "just a test issue\r\n\r\nDepends on https:\/\/github.com\/noffle\/ipget\/issues\/18"
    },
    "noffle\/github-dependency-crawl\/2": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/2",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/2\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/2\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/2\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/2",
      "id": 171090729,
      "number": 2,
      "title": "test issue 2",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-15T00:36:26Z",
      "updated_at": "2016-08-15T00:36:26Z",
      "closed_at": null,
      "body": "Depends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/3"
    },
    "noffle\/github-dependency-crawl\/1": {
      "url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/1",
      "repository_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl",
      "labels_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/1\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/1\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/noffle\/github-dependency-crawl\/issues\/1\/events",
      "html_url": "https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/1",
      "id": 171090703,
      "number": 1,
      "title": "test issue",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-08-15T00:36:01Z",
      "updated_at": "2016-08-15T00:36:38Z",
      "closed_at": null,
      "body": "Depends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/2\r\nDepends on https:\/\/github.com\/noffle\/github-dependency-crawl\/issues\/3"
    },
    "ipfs\/ipget\/18": {
      "url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/18",
      "repository_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget",
      "labels_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/18\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/18\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/18\/events",
      "html_url": "https:\/\/github.com\/ipfs\/ipget\/issues\/18",
      "id": 131799341,
      "number": 18,
      "title": "1.0.0 Roadmap",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-02-06T00:49:32Z",
      "updated_at": "2016-08-15T01:22:47Z",
      "closed_at": null,
      "body": "# roadmap\r\n\r\n- [ ] works reliably\r\n  - [ ] fix gx\/go get panic (https:\/\/github.com\/ipfs\/ipget\/issues\/24)\r\n  - [ ] reproducible builds (gx or vendoring)\r\n  - [ ]  Fall back to public gateway after trying local API (#26)\r\n- [ ] great UX for first-time users\r\n  - [ ] clear USAGE docs (https:\/\/github.com\/ipfs\/ipget\/issues\/20)\r\n  - [ ] great output design (https:\/\/github.com\/ipfs\/ipget\/issues\/21)\r\n- [ ] available on all major package managers\r\n  - [ ] [Ubuntu](http:\/\/packages.ubuntu.com\/)\r\n  - [ ] [Debian](https:\/\/www.debian.org\/distrib\/packages)\r\n  - [ ] [Arch Linux AUR](https:\/\/aur.archlinux.org\/)\r\n  - [ ] [NixOS](https:\/\/nixos.org\/nixos\/packages.html)\r\n  - [ ] [Homebrew](http:\/\/brew.sh\/)\r\n  - [ ] *add yours here!*\r\n\r\n# goals\r\n\r\nPrimary goals for 1.0.0 release:\r\n\r\n1. it **works** reliably, and doesn't hang indefinitely when pieces cannot be found\r\n2. pleasant UX story for the first-time user: good usage docs, output that offers [transparency](http:\/\/www.catb.org\/esr\/writings\/taoup\/html\/transparencychapter.html) (progress bars, good error messages)\r\n3. available on all major linux and osx package managers\r\n\r\n# non-goals\r\n\r\n1. additional features (mdns, custom bootstrap list, optimizations)\r\n\r\nDepends on https:\/\/github.com\/ipfs\/ipget\/issues\/24\r\nDepends on #26\r\nDepends on https:\/\/github.com\/ipfs\/ipget\/issues\/20\r\nDepends on https:\/\/github.com\/ipfs\/ipget\/issues\/21",
      "closed_by": null
    },
    "ipfs\/ipget\/24": {
      "url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/24",
      "repository_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget",
      "labels_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/24\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/24\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/24\/events",
      "html_url": "https:\/\/github.com\/ipfs\/ipget\/issues\/24",
      "id": 146142397,
      "number": 24,
      "title": "ipget panics when run",
      "user": {
        "login": "whyrusleeping",
        "id": 1243164,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/1243164?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/whyrusleeping",
        "html_url": "https:\/\/github.com\/whyrusleeping",
        "followers_url": "https:\/\/api.github.com\/users\/whyrusleeping\/followers",
        "following_url": "https:\/\/api.github.com\/users\/whyrusleeping\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/whyrusleeping\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/whyrusleeping\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/whyrusleeping\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/whyrusleeping\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/whyrusleeping\/repos",
        "events_url": "https:\/\/api.github.com\/users\/whyrusleeping\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/whyrusleeping\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "closed",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 5,
      "created_at": "2016-04-05T23:54:22Z",
      "updated_at": "2016-06-06T17:02:30Z",
      "closed_at": "2016-06-06T17:02:30Z",
      "body": "```\r\n> ipget QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o\r\n2016\/04\/05 16:53:45 Reuse of exported var name: utpAckSkippedResends\r\npanic: Reuse of exported var name: utpAckSkippedResends\r\n\r\n\r\ngoroutine 1 [running]:\r\nlog.Panicln(0xc8200d3da0, 0x2, 0x2)\r\n\t\/home\/whyrusleeping\/go\/src\/log\/log.go:334 +0xc1\r\nexpvar.Publish(0xdc58e0, 0x14, 0x7fe83dc4e978, 0xc820075bb0)\r\n\t\/home\/whyrusleeping\/go\/src\/expvar\/expvar.go:254 +0x233\r\nexpvar.NewInt(0xdc58e0, 0x14, 0xb)\r\n\t\/home\/whyrusleeping\/go\/src\/expvar\/expvar.go:272 +0x75\r\ngx\/ipfs\/QmadkZhaLw1AhXKyBiPmydRuTexhj6WkiZPpo5Uks6WUVq\/utp.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmadkZhaLw1AhXKyBiPmydRuTexhj6WkiZPpo5Uks6WUVq\/utp\/utp.go:52 +0x97\r\ngx\/ipfs\/QmYVqhVfbK4BKvbW88Lhm26b3ud14sTBvcm1H7uWUx1Fkp\/go-multiaddr-net\/utp.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmYVqhVfbK4BKvbW88Lhm26b3ud14sTBvcm1H7uWUx1Fkp\/go-multiaddr-net\/utp\/utp_util.go:105 +0x45\r\ngx\/ipfs\/QmYVqhVfbK4BKvbW88Lhm26b3ud14sTBvcm1H7uWUx1Fkp\/go-multiaddr-net.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmYVqhVfbK4BKvbW88Lhm26b3ud14sTBvcm1H7uWUx1Fkp\/go-multiaddr-net\/net.go:298 +0x56\r\ngx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/net\/conn.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/net\/conn\/secure_conn.go:124 +0x6f\r\ngx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/net.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/net\/interface.go:155 +0x40\r\ngx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/host.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/QmSN2ELGRp4T9kjqiSsSNJRUeR9JKXzQEgwe1HH3tdSGbC\/go-libp2p\/p2p\/host\/host.go:64 +0x4c\r\ngithub.com\/ipfs\/go-ipfs\/core.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/ipfs\/go-ipfs\/core\/pathresolver.go:91 +0x6a\r\ngithub.com\/noffle\/ipfs-embedded-shell.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/noffle\/ipfs-embedded-shell\/shell.go:57 +0x5d\r\ngithub.com\/noffle\/fallback-ipfs-shell.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/noffle\/fallback-ipfs-shell\/shell.go:22 +0x54\r\nmain.init()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/ipfs\/ipget\/main.go:57 +0x4f\r\n\r\ngoroutine 17 [syscall, locked to thread]:\r\nruntime.goexit()\r\n\t\/home\/whyrusleeping\/go\/src\/runtime\/asm_amd64.s:1721 +0x1\r\n\r\ngoroutine 20 [syscall]:\r\nos\/signal.loop()\r\n\t\/home\/whyrusleeping\/go\/src\/os\/signal\/signal_unix.go:22 +0x18\r\ncreated by os\/signal.init.1\r\n\t\/home\/whyrusleeping\/go\/src\/os\/signal\/signal_unix.go:28 +0x37\r\n\r\ngoroutine 21 [select]:\r\ngx\/ipfs\/Qmazh5oNUVsDZTs2g59rq8aYQqwpss8tcUWQzor5sCCEuH\/go-log.(*MirrorWriter).logRoutine(0xc820070400)\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/Qmazh5oNUVsDZTs2g59rq8aYQqwpss8tcUWQzor5sCCEuH\/go-log\/writer.go:71 +0x33c\r\ncreated by gx\/ipfs\/Qmazh5oNUVsDZTs2g59rq8aYQqwpss8tcUWQzor5sCCEuH\/go-log.NewMirrorWriter\r\n\t\/home\/whyrusleeping\/gopkg\/src\/gx\/ipfs\/Qmazh5oNUVsDZTs2g59rq8aYQqwpss8tcUWQzor5sCCEuH\/go-log\/writer.go:38 +0xe2\r\n\r\ngoroutine 22 [chan receive]:\r\ngithub.com\/ipfs\/go-ipfs\/Godeps\/_workspace\/src\/github.com\/codahale\/metrics.init.1.func2()\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/ipfs\/go-ipfs\/Godeps\/_workspace\/src\/github.com\/codahale\/metrics\/metrics.go:321 +0x73\r\ncreated by github.com\/ipfs\/go-ipfs\/Godeps\/_workspace\/src\/github.com\/codahale\/metrics.init.1\r\n\t\/home\/whyrusleeping\/gopkg\/src\/github.com\/ipfs\/go-ipfs\/Godeps\/_workspace\/src\/github.com\/codahale\/metrics\/metrics.go:328 +0x7b\r\n```",
      "closed_by": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      }
    },
    "ipfs\/ipget\/26": {
      "url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/26",
      "repository_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget",
      "labels_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/26\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/26\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/26\/events",
      "html_url": "https:\/\/github.com\/ipfs\/ipget\/issues\/26",
      "id": 149915645,
      "number": 26,
      "title": "Fall back to public gateway after trying local API",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-04-20T23:41:18Z",
      "updated_at": "2016-04-20T23:41:18Z",
      "closed_at": null,
      "body": "If I run `ipget <hash>` I'd expect to (in order):\r\n\r\n1. connect to the IPFS node running on my local machine\r\n2. ask the public gateway via HTTPS\r\n\r\nWe could also try spawning an ephemeral node, but the gateway is already well-connected and should give a faster response. Lots of switches and flags for controlling this flow can come in after.",
      "closed_by": null
    },
    "ipfs\/ipget\/20": {
      "url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/20",
      "repository_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget",
      "labels_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/20\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/20\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/20\/events",
      "html_url": "https:\/\/github.com\/ipfs\/ipget\/issues\/20",
      "id": 132380594,
      "number": 20,
      "title": "nicer help?",
      "user": {
        "login": "jbenet",
        "id": 138401,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/138401?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/jbenet",
        "html_url": "https:\/\/github.com\/jbenet",
        "followers_url": "https:\/\/api.github.com\/users\/jbenet\/followers",
        "following_url": "https:\/\/api.github.com\/users\/jbenet\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/jbenet\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/jbenet\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/jbenet\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/jbenet\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/jbenet\/repos",
        "events_url": "https:\/\/api.github.com\/users\/jbenet\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/jbenet\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 1,
      "created_at": "2016-02-09T10:19:01Z",
      "updated_at": "2016-02-10T00:38:03Z",
      "closed_at": null,
      "body": "help should have a description of what this tool is used for, and an example. look at the man pages for wget and curl. so instead of:\r\n\r\n```\r\nRetrieve and save IPFS objects.\r\n```\r\nmaybe:\r\n\r\n```\r\nipget - retrieve and save IPFS objects\r\n\r\nipget is a tool for non-interactive downloading of files or objects from IPFS to the \r\nuser's filesystem, similar to wget or curl. It supports \/ipfs and \/ipns paths. ipget\r\nis meant to be used in scripts and pipelines.\r\n```\r\nor something.",
      "closed_by": null
    },
    "ipfs\/ipget\/21": {
      "url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/21",
      "repository_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget",
      "labels_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/21\/labels{\/name}",
      "comments_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/21\/comments",
      "events_url": "https:\/\/api.github.com\/repos\/ipfs\/ipget\/issues\/21\/events",
      "html_url": "https:\/\/github.com\/ipfs\/ipget\/issues\/21",
      "id": 133368917,
      "number": 21,
      "title": "What does good CLI output look like?",
      "user": {
        "login": "noffle",
        "id": 489362,
        "avatar_url": "https:\/\/avatars.githubusercontent.com\/u\/489362?v=3",
        "gravatar_id": "",
        "url": "https:\/\/api.github.com\/users\/noffle",
        "html_url": "https:\/\/github.com\/noffle",
        "followers_url": "https:\/\/api.github.com\/users\/noffle\/followers",
        "following_url": "https:\/\/api.github.com\/users\/noffle\/following{\/other_user}",
        "gists_url": "https:\/\/api.github.com\/users\/noffle\/gists{\/gist_id}",
        "starred_url": "https:\/\/api.github.com\/users\/noffle\/starred{\/owner}{\/repo}",
        "subscriptions_url": "https:\/\/api.github.com\/users\/noffle\/subscriptions",
        "organizations_url": "https:\/\/api.github.com\/users\/noffle\/orgs",
        "repos_url": "https:\/\/api.github.com\/users\/noffle\/repos",
        "events_url": "https:\/\/api.github.com\/users\/noffle\/events{\/privacy}",
        "received_events_url": "https:\/\/api.github.com\/users\/noffle\/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2016-02-12T23:27:50Z",
      "updated_at": "2016-02-12T23:27:50Z",
      "closed_at": null,
      "body": "`ipget` should aim to be [transparent](http:\/\/www.catb.org\/esr\/writings\/taoup\/html\/transparencychapter.html): exposing its inner workings as needed to users. (but only [as needed](http:\/\/www.linfo.org\/rule_of_silence.html))\r\n\r\n# usage\r\n\r\nAll good programs dump a block of helpful text when invoked without arguments:\r\n```\r\nUsage: ipget IPFS_PATH [-o]\r\n\r\nipget - retrieve and save IPFS objects\r\n\r\nipget is a tool for non-interactive downloading of files or objects from IPFS to the \r\nuser's filesystem, similar to wget or curl. It supports \/ipfs and \/ipns paths. ipget\r\nis meant to be used in scripts and pipelines.\r\n\r\nArguments:\r\n  IPFS_PATH=\"\"   the IPFS object path\r\n\r\nOptions:\r\n  -o, --output=\"\"   output file path\r\n```\r\n\r\n\r\n# necessary information\r\n\r\nOutput MUST always include, at the minimum (`--quiet`):\r\n\r\n1. whether the download succeeded\r\n2. the resultant fs path to the downloaded file(s), if success\r\n\r\nThe next tier of verbosity should include\r\n\r\n1. the size of the downloaded file(s)\r\n2. the transport (ephemeral node, local daemon, public gateway, bluetooth)\r\n\r\nFinally, maximum verbosity (`--verbose`) could much much more (how many peers we bootstrapped to, the resolved \/ipfs path, resolved IP of the public gateway, progress bar of the download). The goal here is to make human troubleshooting easier.\r\n\r\n# typical use\r\n\r\nHere's what an average successful invocation of `ipget` ought to look like:\r\n```\r\n$ ipget \/ipfs\/QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\nDownloading from IPFS.. ..succeeded\r\nSaved to QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git [519kb]\r\n```\r\n\r\nA really common UX pain is when the IPFS node can't find the hash. It should timeout after some reasonable time (user configurable), and let the user know it's fallen back to another option:\r\n```\r\n$ ipget \/ipfs\/QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\nDownloading from local daemon.. ..failed\r\nDownloading from IPFS.. ..failed\r\nDownloading from public gateway (ipfs.io).. ..succeeded\r\nSaved to QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git [519kb]\r\n```\r\n\r\nAnd of course, sometimes your hash just can't be found:\r\n```\r\n$ ipget \/ipfs\/QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\nDownloading from local daemon.. ..failed\r\nDownloading from IPFS.. ..failed\r\nDownloading from public gateway (ipfs.io).. ..failed\r\nUnable to locate QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\n```\r\n\r\n# verbose \/ quiet output\r\n\r\nIt's **really* not fun when you can't debug a failure any further than this. Unlike HTTP, there's a lot more that can go wrong. Having a `-v\/--verbose` flag will let savvy users get deeper insight into possible failure causes.\r\n\r\n```\r\n$ ipget -v \/ipfs\/QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash git\r\nDownloading via IPFS..\r\nBootstrapping           DONE (9\/9)\r\nResolving path          DONE (\/ipfs\/QmV4XiZEWAL6JDNxfP6PNtGm2MtxviPaGnaGhP9yV5p2ik)\r\nDownloading             TIMEOUT (300kb\/519kb)\r\n..failed\r\n\r\nDownloading from public gateway (ipfs.io)..\r\nResolving               DONE (104.236.176.52)\r\nDownloading             NOT FOUND (404)\r\n..failed\r\n\r\nUnable to locate QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\n```\r\n\r\nInversely, like most `ipfs` commands, there should be a `-q\/--quiet` flag for terseness:\r\n\r\n```\r\n$ ipget \/ipfs\/QmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\nQmWrUZ42cb34SezHLA4xZkPGGTfdcKpnMuAxEXD9yJAeiw\/go-multihash.git\r\n```\r\n\r\nThis is optimal for scripts: they can use POSIX exit codes to determine whether the download succeeded.\r\n\r\n---\r\n\r\ncc @jbenet @whyrusleeping @lgierth\r\ncc @substack too, who may have some unixy program design wisdom",
      "closed_by": null
    }
  }
}
