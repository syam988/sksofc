const { commands, eypz } = require('../command'); 

eypz({
    command: 'ping',
    category: 'mics',
    handler: async (conn, args, message) => {
        const { from } = message;
        const start = new Date().getTime();
        const edited = await conn.sendMessage(from, { text: '🏓 Pinging...' }, { quoted: message });

        const end = new Date().getTime();
        const TripTime = end - start;
        await conn.sendMessage(from, {
            text: `endi!: \`${TripTime} ms`,
            edit: edited.key 
        });
    }
});
