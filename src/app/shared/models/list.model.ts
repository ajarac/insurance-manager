export interface ListHeader {
	title: string;
	property: string;
}

export interface ListActionEvent<T> {
	element: T;
	action: string;
}

export interface ListAction<T> {
	icon: string;
	getColor: (el: T) => () => string;
}

export interface ListConfig<T> {
	headers: ListHeader[];
	actions: ListAction<T>[];
	title?: (item: T) => string;
	images: string[];
}
