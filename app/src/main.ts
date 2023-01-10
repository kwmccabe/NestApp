import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

    //const app = await NestFactory.create<NestExpressApplication>(AppModule);
    //const app = await NestFactory.create(AppModule);
    const app = await NestFactory.create(AppModule, {
        logger: ['verbose'],      // 'log', 'error', 'warn', 'debug', 'verbose'
    });
    await app.listen(process.env.API_PORT);

}
bootstrap();

/*
process.env:
{
"API_PORT":"3000",
"COLOR":"0",
"EDITOR":"vi",
"HOME":"/home/node",
"HOSTNAME":"d27974c35a11",
"INIT_CWD":"/usr/src/app",
"MYSQL_DATABASE":"nestapp",
"MYSQL_HOST":"db",
"MYSQL_PASSWORD":"nestapp_pass",
"MYSQL_PORT":"3306"
"MYSQL_ROOT_PASSWORD":"nestapp_root",
"MYSQL_USERNAME":"nestapp_user",
"NODE_VERSION":"19.4.0",
"NODE":"/usr/local/bin/node",
"npm_command":"run-script",
"npm_config_cache":"/home/node/.npm",
"npm_config_global_prefix":"/usr/local",
"npm_config_globalconfig":"/usr/local/etc/npmrc",
"npm_config_init_module":"/home/node/.npm-init.js",
"npm_config_local_prefix":"/usr/src/app",
"npm_config_metrics_registry":"https://registry.npmjs.org/",
"npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",
"npm_config_noproxy":"",
"npm_config_prefix":"/usr/local",
"npm_config_user_agent":"npm/9.2.0 node/v19.4.0 linux x64 workspaces/false",
"npm_config_userconfig":"/home/node/.npmrc",
"npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js",
"npm_lifecycle_event":"start:dev",
"npm_lifecycle_script":"nest start --watch",
"npm_node_execpath":"/usr/local/bin/node",
"npm_package_json":"/usr/src/app/package.json",
"npm_package_name":"app",
"npm_package_version":"0.0.1",
"PATH":"/usr/src/app/node_modules/.bin:/usr/src/node_modules/.bin:/usr/node_modules/.bin:/node_modules/.bin:/usr/local/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
"PWD":"/usr/src/app",
"REDIS_HOST":"redis",
"REDIS_PORT":"6379",
"YARN_VERSION":"1.22.19",
}
*/
