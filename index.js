"use strict";var{mutateStringPrototype:t,logger:i,Splash:r}=require("./helpers.js"),{CONFIG:e}=require("./config.js");t();i.log(r());e.settings.app_type==="web"?require("./server.js"):e.settings.app_type==="tui"&&require("./cli.js");
