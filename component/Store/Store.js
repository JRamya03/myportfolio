import {configureStore} from "@reduxjs/toolkit"
import initialstate from './Slice'

export const Store=configureStore({
				   reducer:{
						data:initialstate
									}
							})