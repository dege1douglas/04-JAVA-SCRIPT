import tkinter as tk

wind = tk.Tk()
wind.geometry("1000x1000")
lab = tk.Label(wind,text ="teste")
lab.grid()



def mudaTexto():
    lab.configure(text="técnico em des. de sistemas")


butt = tk.Button(wind, text = "teste", command=mudaTexto)
butt.grid()

wind.grid()
wind.mainloop()