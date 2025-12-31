export interface OpenFileStrategyContract {
	open<SelectedFile extends string>(): Promise<SelectedFile>
}
