export interface TableHeader {
	title: string;
	property: string;
}

export interface TableActionEvent<T> {
	element: T;
	action: string;
}

export interface TableAction<T> {
	icon: string;
	getColor: (el: T) => () => string;
}
