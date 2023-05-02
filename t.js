const TelegramBot = require('node-telegram-bot-api');
const token = '6296751950:AAGA5w_QY-pTrU0MWRj1eQWgy9G8mIZd8hA';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const introMsg = "Bonjour, bienvenue sur mon bot !";
    bot.sendMessage(chatId, introMsg);

    const menuMsg = "Sélectionnez une option :";
    const options = {
        reply_markup: {
            keyboard: [
                ["hellddso"],
                ["good"],
                ["fuck"]
            ],
            resize_keyboard: true,
            one_time_keyboard: false
        }
    };

    // Envoyer le menu avec les options
    bot.sendMessage(chatId, menuMsg, options);
});

// Gérer les réponses aux boutons du clavier
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text !== '/start'){
        switch (text ) {
            case 'hello' :
                // Réagir à la sélection "hello"
                bot.sendMessage(chatId, "Bonjour !");
                break;
            case 'good':
                // Réagir à la sélection "good"
                bot.sendMessage(chatId, "Ça va bien, merci !");
                break;
            case 'fuck':
                // Réagir à la sélection "fuck"
                bot.sendMessage(chatId, "Euh... je suis un bot poli, je ne vais pas répondre à cela !");
                break;
            default:
                // Réagir si l'utilisateur envoie un message qui n'est pas une option valide
                bot.sendMessage(chatId, "Je ne comprends pas. Sélectionnez une option dans le menu.");
                break;
        }
    }
});
