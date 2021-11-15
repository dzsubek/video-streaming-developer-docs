"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5638],{19339:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return y}});var a=n(63366),i=(n(67294),n(64983)),o=n(55602),r=n(11578),m=["components"],l={},p={_frontmatter:l},d=o.Z;function y(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)(d,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Batch input for location creation/modification."),(0,i.kt)(r.ZP,{mdxType:"GQLCodeSnippet"},(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.lC,{mdxType:"GQLKeyword"},"type")," BatchLocationInput ",(0,i.kt)(r.dH,{mdxType:"GQLOpen"})),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Name of location.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Must not be empty, must be unique and maximum allowed length is 60 characters.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"name"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String"),(0,i.kt)(r.AW,{mdxType:"GQLOperator"},"!")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# ID of parent region/location.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"parentID"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/ID",mdxType:"GQLLink"},"ID"),(0,i.kt)(r.AW,{mdxType:"GQLOperator"},"!")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Restriction for client connections. Omit if there aren't any restrictions.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"clientRestriction"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-input-objects/ClientRestrictionInput",mdxType:"GQLLink"},"ClientRestrictionInput")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Whether clients can connect to servers in this location or not. Defaults to true.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"clientConnectionsEnabled"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Whether clients can fall back to external CDNs or not. Defaults to true.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"cdnFallbackEnabled"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# External IP ranges of location. Omit if ranges are inherited.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Cannot be filled if inheritExternalRanges is set to true.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"externalRanges"),": [",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/IPv4Range",mdxType:"GQLLink"},"IPv4Range"),(0,i.kt)(r.AW,{mdxType:"GQLOperator"},"!"),"]"),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Whether external ranges are inherited from parent location.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Defaults to false, must have a parent location if it's set to true.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.nV,{mdxType:"GQLComment"},"# Cannot be true if externalRanges field is filled as well.")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.cy,{mdxType:"GQLTab"}),(0,i.kt)(r.Cv,{mdxType:"GQLName"},"inheritExternalRanges"),": ",(0,i.kt)(r.xI,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),(0,i.kt)(r.Ny,{mdxType:"GQLLine"}," "),(0,i.kt)(r.Ny,{mdxType:"GQLLine"},(0,i.kt)(r.Ju,{mdxType:"GQLClose"}))),(0,i.kt)("h2",null,"Fields"),(0,i.kt)("h3",null,"name: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/String"},"String"),"!"),(0,i.kt)("p",null,"Name of location.\nMust not be empty, must be unique and maximum allowed length is 60 characters."),(0,i.kt)("h3",null,"parentID: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/ID"},"ID"),"!"),(0,i.kt)("p",null,"ID of parent region/location."),(0,i.kt)("h3",null,"clientRestriction: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-input-objects/ClientRestrictionInput"},"ClientRestrictionInput")),(0,i.kt)("p",null,"Restriction for client connections. Omit if there aren’t any restrictions."),(0,i.kt)("h3",null,"clientConnectionsEnabled: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/Boolean"},"Boolean")),(0,i.kt)("p",null,"Whether clients can connect to servers in this location or not. Defaults to true."),(0,i.kt)("h3",null,"cdnFallbackEnabled: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/Boolean"},"Boolean")),(0,i.kt)("p",null,"Whether clients can fall back to external CDNs or not. Defaults to true."),(0,i.kt)("h3",null,"externalRanges: [",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/IPv4Range"},"IPv4Range"),"!]"),(0,i.kt)("p",null,"External IP ranges of location. Omit if ranges are inherited.\nCannot be filled if inheritExternalRanges is set to true."),(0,i.kt)("h3",null,"inheritExternalRanges: ",(0,i.kt)("a",{parentName:"h3",href:"/video-streaming-developer-docs/ecdn-api-scalars/Boolean"},"Boolean")),(0,i.kt)("p",null,"Whether external ranges are inherited from parent location.\nDefaults to false, must have a parent location if it’s set to true.\nCannot be true if externalRanges field is filled as well."))}y.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-input-objects-batch-location-input-mdx-b885c33a1231e20e41b2.js.map