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

fn set_repository(repository: &String)
{
    let root = Path::new(&repository);
    assert!(env::set_current_dir(&root).is_ok());
    println!("Repository: {}", root.display());
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![git_log])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn git_log(repository: String, skip: i32, count: i32) -> String {
    set_repository(&repository);

    let keys = vec![
        "%h".to_string(),
        "%p".to_string(),
        "%aN".to_string(),
        "%ae".to_string(),
        "%s".to_string(),
        "%ai".to_string(),
        "%D".to_string(),
    ];

    let output = Command::new("git")
        .arg("log")
        .arg("--skip")
        .arg(&skip.to_string())
        .arg("--max-count")
        .arg(&count.to_string())
        .arg("--pretty=format:".to_string() + &keys.join("%x09"))
        .output()
        .expect("Failed to execute git");

    return String::from_utf8_lossy(&output.stdout).to_string();
}
