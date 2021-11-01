
// -- MAIN CODE -- \\
const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const activity = {
    details: "Your description Here.",
    assets: {
        large_image: "logo2",
        large_text: "Your logo's name Here.",
        small_image: "logo1",
        small_text: "Your logo's name Here.",
    },
    buttons: [
        {
            "label": "Button name Here.",
            "url": "Button URL Here."
        },
    ],
    timestamps: { start: Date.now() },
    instance: true,
};

client.on('ready', async () => {
    client.request("SET_ACTIVITY", { pid: process.pid, activity: activity });
    console.log("Client Ready.");
});
client.on('connected', async () => {
    console.log("RPC Connected.");
});

client.login({ clientId: "Your Application's ID Here." });
// --End-- \\

/*

ISC License (ISC)

Copyright 2021 MetalOoze

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided 
that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING 
ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES 
OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE 
USE OR PERFORMANCE OF THIS SOFTWARE.

*/