// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use ssh2::Session;
use std::io::prelude::*;
use std::net::TcpStream;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    println!("name= {}", name);

    // Connect to the local SSH server
    let tcp = TcpStream::connect("192.168.2.109:22").unwrap();
    let mut sess = Session::new().unwrap();
    sess.set_tcp_stream(tcp);
    sess.handshake().unwrap();

    sess.userauth_password("root", "1$=6yuan").unwrap();

    let mut channel = sess.channel_session().unwrap();
    channel.exec(name).unwrap();
    let mut s = String::new();

    channel.read_to_string(&mut s).unwrap();
    println!("{}", s);
    // channel.wait_close();
    // println!("{}", channel.exit_status().unwrap());
    "hello,world".to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
