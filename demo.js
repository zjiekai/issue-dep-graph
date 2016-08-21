function main() {
  tasks = {
    data:[],
    links:[]
  };
  gantt.init("gantt_here");
  gantt.parse(tasks);
}

window.onload = main;
