import random
import json

ATRIBUTES = {
    "WEAPON_SKILL",
    "BALLISTIC_SKILL",
    "PERCEPTION",
    "INTELLIGENCE",
    "WILLPOWER",
    "AGILITY",
    "STRENGTH",
    "TOUGHNESS",
    "INFLUENCE",
    "FELLOWSHIP"
    }


MINIMUMS = {
    "WEAPON_SKILL": 32,
    "BALLISTIC_SKILL": 28,
    "PERCEPTION": 34,
    "INTELLIGENCE": 34,
    "WILLPOWER": 35,
    "AGILITY": 31,
    "STRENGTH": 26,
    "TOUGHNESS": 30,
    "INFLUENCE": 25,
    "FELLOWSHIP": 40
    }


def roll_2d10():
    r = random.Random()
    return r.choice(range(1, 11)) + r.choice(range(1, 11))


def generate_character_rolls():
    att_rolls = {a: 20 + roll_2d10() for a in ATRIBUTES}
    return att_rolls


def is_good(results):
    for c, r in results.items():
        if MINIMUMS[c] > r:
            return False
    return True


if __name__ == "__main__":

    tries = 0
    found = False

    while not found:
        tries += 1
        char = generate_character_rolls()
        found = is_good(char)
        if tries % 1000 == 0:
            print(tries)

    print(tries)
    print(json.dumps(char, indent=4))