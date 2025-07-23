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

-- Show player stats
function showStats()
	print("\n📊 Player Stats:")
	print("Name: " .. player.name)
	print("HP: " .. player.hp)
	print("Gold: " .. player.gold)
	print("Inventory:")
	for i, item in ipairs(player.inventory) do
		print("- " .. item)
	end
end

-- Entry point
function main()
	welcome()

	-- 🎁 Add extra items and gold for the challenge
	table.insert(player.inventory, "Magic Sword")
	player.gold = player.gold + 50

	-- Present the player with a directional choice
	function enterRoom()
		print("\n🚪 You stand before two dark hallways.")
		print("Do you want to go [left] or [right]?")
		io.write(">> ")
		local choice = io.read()

		if choice == "left" then
			print("\n🧟‍♂️ You enter a room and a zombie ambushes you! You lose 2 HP.")
			player.hp = player.hp - 20
		elseif choice == "right" then
			print("\n💰 You find a tressure chest filled with 100 gold!")
			player.gold = player.gold + 100
		else
			print("\n❓ You stand in frozen in confusion... Nothing happens.")
		end
	end

	-- 🧾 Show updated player stats
	showStats()

	-- Room decision logic
	enterRoom()

	-- Game loop will go here in the next lessons
	--
	showStats()
end

-- Start the game
main()
