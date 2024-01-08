import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello, nice to meet you.  enter your name');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const ola = () => {
        const botMessage = createChatBotMessage('ola');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    

  // Put the handleHello function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,ola,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;