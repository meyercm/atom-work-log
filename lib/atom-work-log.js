'use babel';

import { CompositeDisposable } from 'atom';

export default {
  logfile: null,
  subscriptions: null,

  activate(state) {
    home = require('os-homedir');
    fs = require('fs');
    logfile = `${home()}/.atom_work_log`;
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    console.log("work-log activated");

    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'core:save': (e) => {
         editor = atom.workspace.getActiveTextEditor();
         d = new Date();
         months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
         year = d.getFullYear();
         month = months[d.getMonth()]; //("0"+(d.getMonth()+1)).slice(-2);
         day = ("0" + d.getDate()).slice(-2);
         hour = ("0" + d.getHours()).slice(-2);
         min = ("0" + d.getMinutes()).slice(-2);
         sec = ("0" + d.getSeconds()).slice(-2);
         timestamp =  `${year}${month}${day} ${hour}:${min}:${sec}`
         log_statement = `${timestamp} ${editor.getPath()}\n`;
         fs.appendFile(logfile, log_statement);
         console.log(log_statement);
      }
    }));



    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-work-log:show': (e) => {
        home = require('os-homedir');
        logfile = `${home()}/.atom_work_log`;
        atom.workspace.open(logfile);
      }
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {};
  },

};
