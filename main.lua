-- Dungeon of Doom - Text-Based Adventure Game
-- Author: Mark Sikaundi

-- Game State
player = {
    name = "",
    hp = 100,
    gold = 0,
    inventory = {},
    alive = true
}

-- Welcome the player
function welcome()
    print("🌟 Welcome to the Dungeon of Doom! 🌟")
    io.write("Enter your name, brave adventurer: ")
    player.name = io.read()
    print("Greetings, " .. player.name .. "! Your journey begins now...\n")
end

-- Entry point
function main()
    welcome()
    -- Game loop will go here
end

main()
