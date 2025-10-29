import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./terminal.scss";

const Terminal = () => {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    const commands = {
        help: {
            description: "Display all available commands",
            action: () => {
                return (
                    <div className="help-output">
                        <div className="help-header">Available Commands:</div>
                        <div className="help-item">
                            <span className="cmd-name">help</span>
                            <span className="cmd-desc">Display all available commands</span>
                        </div>
                        <div className="help-item">
                            <span className="cmd-name">about</span>
                            <span className="cmd-desc">Learn about Youness Hamdaoui</span>
                        </div>
                        <div className="help-item">
                            <span className="cmd-name">skills</span>
                            <span className="cmd-desc">Show technical skills and expertise</span>
                        </div>
                        <div className="help-item">
                            <span className="cmd-name">contact</span>
                            <span className="cmd-desc">Get contact information</span>
                        </div>
                        <div className="help-item">
                            <span className="cmd-name">clear</span>
                            <span className="cmd-desc">Clear terminal screen</span>
                        </div>
                    </div>
                );
            }
        },
        about: {
            description: "Learn about Youness Hamdaoui",
            action: () => (
                <div className="info-output">
                    <div className="info-line">
                        <strong>╔═══════════════════════════════════════════════════════════════╗</strong>
                    </div>
                    <div className="info-line">
                        <strong>║</strong> 👨‍💻 Youness Hamdaoui - Professional Profile <strong>║</strong>
                    </div>
                    <div className="info-line">
                        <strong>╚═══════════════════════════════════════════════════════════════╝</strong>
                    </div>
                    <div className="info-line"></div>
                    <div className="info-line">
                        <strong className="section-title">► Current Position:</strong>
                    </div>
                    <div className="info-line indent">
                        • IS Consultant - Software Engineer @ <span className="highlight">CGI</span>
                    </div>
                    <div className="info-line"></div>
                    <div className="info-line">
                        <strong className="section-title">► Previous Experience:</strong>
                    </div>
                    <div className="info-line indent">
                        • Full Stack & Cloud Engineer @ <span className="highlight">Ministry of Agriculture (Morocco)</span>
                    </div>
                    <div className="info-line indent">
                        • Developed HR management system with:
                    </div>
                    <div className="info-line double-indent">
                        - CI/CD Azure pipeline
                    </div>
                    <div className="info-line double-indent">
                        - AI chatbot integration
                    </div>
                    <div className="info-line double-indent">
                        - Real-time HR analytics dashboard
                    </div>
                    <div className="info-line indent">
                        • Used agile methodologies for automation and scalability
                    </div>
                    <div className="info-line"></div>
                    <div className="info-line indent">
                        • UNIX & Oracle Systems Administrator Intern @ <span className="highlight">TGR (Trésorerie Générale du Royaume)</span>
                    </div>
                    <div className="info-line indent">
                        • Managed UNIX servers and Oracle database systems
                    </div>
                    <div className="info-line indent">
                        • Ensured system reliability and performance optimization
                    </div>
                    <div className="info-line"></div>
                    <div className="info-line">
                        <strong className="section-title">► Community Leadership:</strong>
                    </div>
                    <div className="info-line indent">
                        • <span className="highlight">Google Cloud Innovator</span> Member
                    </div>
                    <div className="info-line indent">
                        • Lead @ <span className="highlight">GDSC EMSI Rabat</span> (Nearly 2 years)
                    </div>
                    <div className="info-line indent">
                        • Organized multiple hackathons
                    </div>
                    <div className="info-line indent">
                        • Fostered university-wide tech engagement and innovation
                    </div>
                    <div className="info-line"></div>
                    <div className="info-line">
                        <strong>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</strong>
                    </div>
                </div>
            )
        },
        skills: {
            description: "Show technical skills and expertise",
            action: () => (
                <div className="skills-output">
                    <div className="skill-category">
                        <div className="category-title">💻 Languages:</div>
                        <div className="skill-tags">
                            <span className="tag">Java</span>
                            <span className="tag">JavaScript</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">Python</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <div className="category-title">🔧 Frameworks:</div>
                        <div className="skill-tags">
                            <span className="tag">Spring Boot</span>
                            <span className="tag">React</span>
                            <span className="tag">Angular</span>
                            <span className="tag">Node.js</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <div className="category-title">☁️ Cloud & DevOps:</div>
                        <div className="skill-tags">
                            <span className="tag">Azure</span>
                            <span className="tag">GCP</span>
                            <span className="tag">Docker</span>
                            <span className="tag">Kubernetes</span>
                        </div>
                    </div>
                </div>
            )
        },
        contact: {
            description: "Get contact information",
            action: () => (
                <div className="contact-output">
                    <div className="contact-line">📧 <strong>Email:</strong> ham.youness@gmail.com</div>
                    <div className="contact-line">📱 <strong>Phone:</strong> +212656785099</div>
                    <div className="contact-line">💼 <strong>LinkedIn:</strong> https://www.linkedin.com/in/youness-hamdaoui-4b269b201/</div>
                    <div className="contact-line">🐙 <strong>GitHub:</strong> github.com/SCOTTGeek-dev</div>
                </div>
            )
        },
        clear: {
            description: "Clear terminal screen",
            action: () => {
                setHistory([]);
                return null;
            }
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        
        if (!trimmedInput) return;

        // Handle clear command specially
        if (trimmedInput.toLowerCase() === 'clear') {
            setHistory([]);
            setCommandHistory([...commandHistory, trimmedInput]);
            setHistoryIndex(-1);
            setInput("");
            return;
        }

        const newHistory = [...history, { type: 'input', content: trimmedInput }];
        
        if (commands[trimmedInput.toLowerCase()]) {
            const output = commands[trimmedInput.toLowerCase()].action();
            if (output !== null) {
                newHistory.push({ type: 'output', content: output });
            }
        } else if (trimmedInput) {
            newHistory.push({ 
                type: 'error', 
                content: `Command not found: ${trimmedInput}. Type 'help' for available commands.` 
            });
        }

        setHistory(newHistory);
        setCommandHistory([...commandHistory, trimmedInput]);
        setHistoryIndex(-1);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        }
    };

    const focusInput = () => {
        inputRef.current?.focus();
    };

    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="btn close"></span>
                    <span className="btn minimize"></span>
                    <span className="btn maximize"></span>
                </div>
                <div className="terminal-title">root@portfolio:~</div>
            </div>
            <div className="terminal-body" ref={terminalRef} onClick={focusInput}>
                <div className="terminal-welcome">
                    <div className="welcome-text">Welcome to Root Portfolio Terminal v1.0.0</div>
                    <div className="welcome-hint">Type '<strong>help</strong>' to see available commands</div>
                </div>
                {history.map((item, index) => (
                    <div key={index} className={`terminal-line ${item.type}`}>
                        {item.type === 'input' && (
                            <div className="input-line">
                                <span className="prompt">root@portfolio:~$</span>
                                <span className="command">{item.content}</span>
                            </div>
                        )}
                        {item.type === 'output' && <div className="output-line">{item.content}</div>}
                        {item.type === 'error' && <div className="error-line">{item.content}</div>}
                    </div>
                ))}
                <form onSubmit={handleSubmit} className="terminal-input-form">
                    <span className="prompt">root@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="terminal-input"
                        autoFocus
                        spellCheck="false"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
