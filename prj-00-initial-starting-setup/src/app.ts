function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjDescriptor;
}

class ProjectInput {
    descriptionInputElement: HTMLInputElement;
    element: HTMLFormElement;
    hostElement: HTMLDivElement;
    peopleInputElement: HTMLInputElement;
    templateElement: HTMLTemplateElement;
    titleInputElement : HTMLInputElement;

    constructor() {
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    @autoBind
    private submitHandler(event: Event) {
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();