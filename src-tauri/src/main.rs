#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::env;
use std::path::Path;
use std::process::Command;

#[derive(PartialEq, Default, Clone, Debug)]
struct Commit {
    hash: String,
    message: String,
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![git_status])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn git_status(repository: String) -> String {
    set_repository(&repository);

    let command = Command::new("git")
        .arg("status")
        .output()
        .expect("Failed to execute git");

    String::from_utf8_lossy(&command.stdout).to_string()
}

fn set_repository(repository: &String)
{
    let root = Path::new(&repository);
    assert!(env::set_current_dir(&root).is_ok());
    println!("Repository: {}", root.display());
}
