import React from "react";
import { ReactTerminal } from 'react-terminal';

// import { invoke } from "@tauri-apps/api/tauri";
import { TerminalContainer, TerminalBackgroupContainer } from "./styles/app";

const App: React.FC = () => {

  const themeBGColor: string = "#272B36";

  // Define commands here
  const commands = {
  };

  const buildCommand = (commands: string[]): string => {
    let command = "";

    if (commands[1] !== undefined) {
      if (commands[1] === '') {
        command = commands[0];
      } else {
        command = commands.join(" "); // 使用空格作为连接符
      }
    }

    return command;
  }

  const executeCommands = (command: String) => {

    return `传递到 Rust 去链接 SSH 客户端, 然后执行 ${command}`
  }

  return (
    <TerminalBackgroupContainer color={themeBGColor}>
      <TerminalContainer>
        <ReactTerminal
          commands={commands}
          prompt={"$"}
          showControlBar={false}
          showControlButtons={false}
          welcomeMessage={<>Welcome to React Terminal <br /></>}
          defaultHandler={(...commands: string[]) => {
            let command = buildCommand(commands);
            console.log("输入的命令是: ", command);

            return executeCommands(command);
          }}
          themes={{
            "default-theme": {
              themeBGColor: themeBGColor,
              themeToolbarColor: themeBGColor,
              themeColor: "#FFFEFC",
              themePromptColor: "#a917a8"
            }
          }}
          theme={"default-theme"}
        />
      </TerminalContainer>
    </TerminalBackgroupContainer>
  );
}

export default App;
