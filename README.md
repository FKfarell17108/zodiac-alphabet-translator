# ✦ Zodiac Alphabet Translator

A simple web application that translates plain text (A–Z) into celestial symbols - planets, moons, and zodiac signs - based on a classic **Zodiac Alphabet** cipher system.

---

## What is the Zodiac Alphabet Translator?

The **Zodiac Alphabet Translator** is a web-based encoder and decoder that converts every letter of the Latin alphabet (A through Z) into a corresponding astronomical or astrological symbol. Each letter is mapped to a unique celestial symbol such as a planet sign, a zodiac constellation sign, or a simple directional glyph.

This tool works in two directions:

- **Encode** - converts plain text (e.g. `HELLO`) into zodiac symbols (e.g. `♂♅♊♊♍`)
- **Decode** - converts zodiac symbols back into readable plain text

Numbers, spaces, and punctuation are preserved as-is during translation. The encoder is case-insensitive, so both uppercase and lowercase letters are accepted.

---

## What is the Zodiac?

The **Zodiac** is a band of the sky divided into twelve sections, each named after a constellation. It has been used for thousands of years in astronomy and astrology to track the movement of the Sun, Moon, and planets across the sky throughout the year.

The twelve zodiac signs are:

| Sign | Symbol | Dates (approx.) |
|---|---|---|
| Aries (Ram) | ♈ | Mar 21 – Apr 19 |
| Taurus (Bull) | ♉ | Apr 20 – May 20 |
| Gemini (Twins) | ♊ | May 21 – Jun 20 |
| Cancer (Crab) | ♋ | Jun 21 – Jul 22 |
| Leo (Lion) | ♌ | Jul 23 – Aug 22 |
| Virgo (Maiden) | ♍ | Aug 23 – Sep 22 |
| Libra (Balance) | ♎ | Sep 23 – Oct 22 |
| Scorpio (Scorpion) | ♏ | Oct 23 – Nov 21 |
| Sagittarius (Archer) | ♐ | Nov 22 – Dec 21 |
| Capricorn (Sea-goat) | ♑ | Dec 22 – Jan 19 |
| Aquarius (Water-bearer) | ♒ | Jan 20 – Feb 18 |
| Pisces (Fishes) | ♓ | Feb 19 – Mar 20 |

Beyond the zodiac constellations, the system also incorporates **planetary symbols** used in classical astronomy and astrology to represent the Sun, Moon, and planets of the solar system.

---

## The Zodiac Alphabet - Full Mapping

Below is the complete A–Z mapping used by this translator, based on the original **Zodiac Alphabet** cipher:

| Letter | Symbol | Name | Type |
|---|---|---|---|
| A | ⊙ | Sun | Planet |
| B | ♃ | Jupiter | Planet |
| C | ♄ | Saturn | Planet |
| D | ♆ | Neptune | Planet |
| E | ⛢ | Uranus | Planet |
| F | ⊕ | Earth | Planet |
| G | ♀ | Venus | Planet |
| H | ♂ | Mars | Planet |
| I | ☿ | Mercury | Planet |
| J | ☽ | Moon | Celestial |
| K | ♉ | Taurus | Zodiac |
| L | ♊ | Gemini (Twins) | Zodiac |
| M | ♋ | Cancer | Zodiac |
| N | ♌ | Leo (Lion) | Zodiac |
| O | ♍ | Virgo | Zodiac |
| P | ♎ | Libra (Balance) | Zodiac |
| Q | ♏ | Scorpio | Zodiac |
| R | ♐ | Sagittarius | Zodiac |
| S | ♑ | Capricorn | Zodiac |
| T | ♓ | Pisces (Fishes) | Zodiac |
| U | ♈ | Aries (Ram) | Zodiac |
| V | ♒ | Aquarius | Zodiac |
| W | > | Greater-than | Symbol |
| X | ≫ | Double Greater-than | Symbol |
| Y | ≡ | Triple Bar | Symbol |
| Z | < | Less-than | Symbol |

---

## Features

- Encode plain text into zodiac symbols
- Decode zodiac symbols back into plain text
- Spaces, numbers, and punctuation are preserved
- Copy result to clipboard
- Symbol Map reference panel (shows all 26 mappings with names and types)
- Classic retro desktop-style UI (Windows classic theme)
- Responsive layout for mobile and desktop

---

## File Structure

```
zodiac-alphabet-translator/
├── index.html      - Main HTML structure
├── style.css       - Retro Windows-style stylesheet
├── script.js       - Encode/decode logic and UI interactions
└── README.md       - This file
```

---

## How to Use

1. Download or clone this repository.
2. Open `index.html` in any modern web browser.
3. No server, no dependencies, no installation required.

---

## License & Copyright

© 2026 Farell Kurniawan

This project is proprietary software under the **FK Universe License**. All rights reserved. Unauthorized use, copying, or distribution is strictly prohibited. This repository is for viewing purposes only.
