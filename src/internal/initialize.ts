import { HelloWorldCommandHandler } from "../helloworldCommandHandler";
import { GenericCommandHandler } from "../genericCommandHandler";
import { BotBuilderCloudAdapter } from "@microsoft/teamsfx";
import ConversationBot = BotBuilderCloudAdapter.ConversationBot;
import config from "./config";

// Create the command bot and register the command handlers for your app.
// You can also use the commandApp.command.registerCommands to register other commands
// if you don't want to register all of them in the constructor
console.log(`config is : ${JSON.stringify(config)}`)

// https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-node?tabs=azure-cli%2Clinux&pivots=programming-language-javascript
// https://github.com/Azure-Samples/azure-sdk-for-js-keyvault-secret-get-set-managedid/blob/master/v4/index.js
// https://learn.microsoft.com/en-us/azure/key-vault/general/rbac-guide?tabs=azure-portal
// https://www.youtube.com/watch?v=h987jU2X0MA

export const commandApp = new ConversationBot({
  // The bot id and password to create CloudAdapter.
  // See https://aka.ms/about-bot-adapter to learn more about adapters.
  adapterConfig: config,
  command: {
    enabled: true,
    commands: [new HelloWorldCommandHandler(), new GenericCommandHandler()],
  },
});
