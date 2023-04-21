import { createContext, useEffect, useState } from "react";
import { getStore, setStore } from "../../components/async/async-storage.component";
const conversationsData = require("../../data/conversations.data.json");
const messagesData = require("../../data/messages.data.json");

export const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const findConversations = async () => {
        setIsLoading(true);
        const conversationsStore = await getStore("@conversations")
        if (conversationsStore) {
            setConversations(JSON.parse(conversationsStore))
            setIsLoading(false);
        } else {
            const conversations = await conversationsData;
            if (conversations) {
                setConversations(conversations)
                setStore("@conversations", JSON.stringify(conversations))
                setIsLoading(false);
            } else {
                setError("گفتگویی وجود ندارد");
                setIsLoading(false);
            }
        }
    }

    const findMessages = async (id) => {
        setMessages([])
        setIsLoading(true);
        const messagesStore = await getStore(`@messages${id}`);
        if (messagesStore) {
            setMessages(JSON.parse(messagesStore))
            setIsLoading(false);
        } else {
            const messagess = await messagesData;
            if (messagess) {
                messagess.forEach(item => {
                    item.userId === id &&
                        setMessages(prov => ([...prov, item.messages]))
                })
                setStore(`@messages${id}`, JSON.stringify(messages))
                setIsLoading(false);
            } else {
                setError("پیامی وجود تدارد");
                setIsLoading(false);
            }
        }
    }

    const send = (message, userId) => {
        let messagesArray = messages;
        messagesArray.push({ id: messages.length + 1, message: message, date: new Date().getTime(), status: 'send' })
        setStore(`@messages${userId}`, JSON.stringify(messagesArray))
    }

    useEffect(() => {
        findConversations();
    }, [])

    return <MessagesContext.Provider
        value={{
            isLoading,
            error,
            conversations,
            messages,
            send,
            findMessages
        }}>
        {children}
    </MessagesContext.Provider>

}