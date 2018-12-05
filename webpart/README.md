# spfx react-dom bug demo

## pre-req

* `npm i -g @microsoft/generator-sharepoint@1.6.0`
* `yo @microsoft/sharepoint`

## reproduce

* goto external-lib folder and run `npm i`
* goto external-lib folder and run `npm run dev`
* goto external-lib folder and run `npm link`

* goto webpart folder and run `npm i`
* goto webpart folder and run `npm link external-lib`

* run `gulp bundle`
* run `gulp package-solution`
* run `gulp serve`

* upload .sppkg to your SharePoint online test tenant and deploy (tenant wide)
* create page and add `HelloWorld` webpart you just deployed
* observe a bug (might take a few page refreshes)
