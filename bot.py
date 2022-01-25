from lib2to3.pgen2 import token
import hikari
import Consts

bot = hikari.GatewayBot(token=Consts.TOKEN)

@bot.listen(hikari.GuildMessageCreateEvent)
async def print_message(event):
    print(event.content)

@bot.listen(hikari.StartedEvent)
async def bot_started(event):
    print('Bot has started')

bot.run()
