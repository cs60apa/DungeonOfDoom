-- Dungeon of Doom - Text-Based Adventure Game
-- Author: Mark Sikaundi

-- Game State
player = {
	name = "",
	hp = 100,
	gold = 0,
	inventory = { "Health Potion" },
	alive = true,
}

-- Welcome the player
function welcome()
	print("🌟 Welcome to the Dungeon of Doom! 🌟")
	io.write("Enter your name, brave adventurer: ")
	player.name = io.read()
	print("Greetings, " .. player.name .. "! Your journey begins now...\n")
end

-- New Function: Show Player Stats
function showStats()
	print("\n📊 Player Stats:")
	print("Name: " .. player.name)
	print("HP: " .. player.hp)
	print("Gold: " .. player.gold)
	print("Inventory: ")

	-- Challenge Solution
	for i, item in ipairs(player.inventory) do
		table.insert(player.inventory, "Magic Sword")
		player.gold = player.gold + 50
		print("- " .. item)
	end
end

-- Challenge
table.insert(player.inventory, "Magic Sword")
player.gold = player.gold + 50

-- Entry point
function main()
	welcome()
	showStats()
	-- Game loop will go here
end

main()
