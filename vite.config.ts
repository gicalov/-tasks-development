import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/components/MyComponent.tsx", // Укажите входной файл вашей библиотеки
      name: "MyReactLibrary", // Имя библиотеки
      fileName: (format) => `my-react-library.${format}.js`, // Формат выходного файла
    },
    rollupOptions: {
      // Здесь вы можете настроить Rollup
      external: ["react", "react-dom"], // Обозначьте зависимости, которые не будут включены в бандл
      output: {
        globals: {
          react: "React", // Определите глобальные переменные для внешних зависимостей
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
