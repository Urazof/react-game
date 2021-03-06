
# А что это вообще такое?
Игру «Жизнь» изобрел математик Джон Хортон Конуэй в 1970 году.
Она пользовалась популярностью не только среди его коллег. 
Об увлекательности игры «Жизнь» свидетельствуют результаты множества интересных исследований 
и многочисленные компьютерные реализации. При этом она имеет непосредственное отношение к 
перспективной области математики — теории клеточных автоматов.

Джон Конвей заинтересовался проблемой, предложенной в 1940-х годах известным математиком
Джоном фон Нейманом, который пытался создать гипотетическую машину, которая может воспроизводить сама себя.
Джону фон Нейману удалось создать математическую модель такой машины с очень сложными правилами.
Конвей попытался упростить идеи, предложенные Нейманом, и в конце концов ему удалось создать правила, 
которые стали правилами игры «Жизнь».
# Правила игры «Жизнь»
«Жизнь» разыгрывается на бесконечном клеточном поле.
Место действия этой игры — «вселенная» — это размеченная на клетки поверхность или плоскость — безграничная, 
ограниченная, или замкнутая (в пределе — бесконечная плоскость).
Каждая клетка на этой поверхности может находиться в двух состояниях: быть «живой» (заполненной) или быть «мёртвой» (пустой). Клетка имеет восемь соседей, окружающих её.
Распределение живых клеток в начале игры называется первым поколением. Каждое следующее поколение рассчитывается на основе предыдущего по таким правилам:
в пустой (мёртвой) клетке, рядом с которой ровно три живые клетки, зарождается жизнь;
если у живой клетки есть две или три живые соседки, то эта клетка продолжает жить; в противном случае, если соседей меньше двух или больше трёх, клетка умирает («от одиночества» или «от перенаселённости»)
Игра прекращается, если
на поле не останется ни одной «живой» клетки
конфигурация на очередном шаге в точности (без сдвигов и поворотов) повторит себя же на одном из более ранних шагов (складывается периодическая конфигурация)
при очередном шаге ни одна из клеток не меняет своего состояния (складывается стабильная конфигурация; предыдущее правило, вырожденное до одного шага назад)
[Wikipedia link](https://en.wikipedia.org/wiki/The_Game_of_Life)
# Как играть?
Все просто - игрок выбирает размер поля и интервал обновления состояния игры. Размер поля, по понятным причинам, фиксируется на старте. Интервал же можно менять в процессе изменения состояния игры. 
в крайних точках интервал принимает дефолтные значения

**_Приятного погружения в познавательный процесс наблюдения за клеточным автоматом_**)


