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

    -- 🧾 Show updated player stats
    showStats()

    -- Game loop will go here in the next lessons
end

-- Start the game
main()
