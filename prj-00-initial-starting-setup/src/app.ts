class ProjectInput {
    element: HTMLFormElement;
    hostElement: HTMLDivElement;
    templateElement: HTMLTemplateElement;

    constructor() {
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.attach();
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();