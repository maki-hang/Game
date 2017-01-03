interface TaskCondition {
    onAccept(task: TaskConditionContext);

    onSubmit(task: TaskConditionContext);

    onChange(task: TaskConditionContext);

}

class NPCTalkTaskCondition implements TaskCondition {
    public onAccept(task: TaskConditionContext) {
        task.current++;
        //task.checkStatus();
    }
    onSubmit(task: TaskConditionContext) {


    }

    onChange(task: TaskConditionContext) {

    }
}

class KillMonsterTaskCondition extends SenceService implements TaskCondition {


    onAccept(task: TaskConditionContext) {

    }

    onSubmit(task: TaskConditionContext) {

    }

    onChange(task: TaskConditionContext) {

    }
}

interface TaskConditionContext {

    current: number;
    //get current();

}