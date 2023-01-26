import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { z } from 'zod'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	// resolve: { alias: [userAlias({ find:'@components', replacement: 'src/components'}), ], },
})


/*
const userAliasType = z.object({
	find: z.string(),
	replacement: z.string()
})

function userAlias({find, replacement }: z.infer<typeof userAliasType>) {
	const _replacement = path.resolve(__dirname, replacement)
	return {find, replacement: _replacement}
}
*/