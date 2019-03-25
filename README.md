# vue-ref-app

# install these modules CHE
npm install buefy
npm install axios
npm install vue-chartjs chart.js --save
npm i vue-headful
npm install axios-mock-adapter --save-dev

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Add SITE to IIS
    <sites>
        <site name="vue" id="1" serverAutoStart="true">
            <application path="/">
                <virtualDirectory path="/" physicalPath="%IIS_SITES_HOME%\vue" />
            </application>
            <bindings>
                <binding protocol="http" bindingInformation=":8081:localhost" />
            </bindings>
        </site>
    </sites>

### Add this to IIS in order to make page-refresh work
    <system.webServer>

      <rewrite>
        <rules>
          <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
            <match url="(.*)" />
            <conditions logicalGrouping="MatchAll">
              <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
              <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
            <action type="Rewrite" url="/" />
          </rule>
        </rules>
      </rewrite>

    </system.webServer>
