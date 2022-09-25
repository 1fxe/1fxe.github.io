const date = new Date();

const monthEmoji = ['🥂', '💝', '', '🐣', '🎂', '', '', '', '🏫', '🎃', '🎆', '🎅']
const emoji = monthEmoji.at(date.getMonth());

const title = document.getElementsByTagName("title")[0];
title.text += ` ${emoji}`;