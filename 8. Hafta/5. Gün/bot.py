import logging

aiohttp_logger = logging.getLogger('aiohttp')
aiohttp_logger.setLevel(logging.WARNING)  

import discord
import asyncio
from discord import app_commands
from discord.ext import commands

intents = discord.Intents.all()
intents.typing = True
intents.presences = False

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Bot olarak giriş yapıldı: {bot.user.name}')
    await bot.change_presence(activity=discord.Game(name="Sikiyle",))
    try:
        synced = await bot.tree.sync()
        print(f"Synced {len(synced)} command(s)")
    except Exception as e:
        print(e)
        
@bot.event
async def on_member_join(member):
    hg_channel = bot.get_channel(id=783615528291532875)
    await hg_channel.send(f"{member.mention}({member.id}) hoş geldin amk.")
    
@bot.tree.command(name="hello")
async def hello(interaction: discord.Interaction):
    await interaction.response.send_message(f"Hey {interaction.user.mention}! bu bir slash komudu.", ephemeral=True)

@bot.tree.command(name="say")
@app_commands.describe(thing_to_say = "What should I say?")
async def say(interaction: discord.Interaction, thing_to_say: str):
    await interaction.response.send_message(f"{interaction.user.name} said: '{thing_to_say}'")

@bot.command()
async def merhaba(ctx):
    await ctx.send('Merhaba!')
    
@bot.command()
async def naber(ctx):
    await ctx.send("İyidir senden naber")
    
@bot.command()
async def andrewtate(ctx):
    await ctx.send("Buyrun benim")
    
@bot.command()
async def tatesong(ctx):
    await ctx.send("https://youtu.be/5gLqrySYQZw")

async def start_bot():
    await bot.start('MTEzNjkzODE5OTQwMzQ3MDkyOQ.GKtPrE.dSvExlmg04q6NEOqugIXGRrQO9-MWVpUcVPvNU')

asyncio.get_event_loop().run_until_complete(start_bot())
