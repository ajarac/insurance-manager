export interface TableHeader {
	title: string;
	property: string;
}

export interface TableActionEmit<T> {
	element: T;
	action: string;
}
