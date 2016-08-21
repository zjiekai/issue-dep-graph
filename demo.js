function name2id(name) {
  return data.issues[name].id;
}

function main() {
  var taskData = [];
  var linkData = [];
  var idCounter = 0;

  _.each(data.issues, function(issue, name) {
    ++idCounter;
    issue.id = idCounter;
    var start_date = dateFormat(new Date(issue.created_at), 'dd-mm-yyyy');
    taskData.push({
      id: issue.id,
      text: name,
      start_date: start_date,
      duration: 7
    });
  });

  var linkIdCounter = 0;
  _.each(data.graph, function(issues, name) {
    try {
      var id0 = name2id(name);
      _.each(issues, function (name) {
        var id1 = name2id(name);

        ++linkIdCounter;
        linkData.push({
          id: linkIdCounter,
          source: id1,
          target: id0,
          type: "0"
        });
      });
    } catch(e) {
      console.log(name);
    }
  });

  tasks = {
    data: taskData,
    links:linkData
  };
  gantt.init("gantt_here");
  gantt.parse(tasks);
}

window.onload = main;
